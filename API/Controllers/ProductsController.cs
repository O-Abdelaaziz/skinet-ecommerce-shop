using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Core.Entities;
using Core.Interfaces;
using Core.Specifications;
using API.Dtos;
using AutoMapper;
using API.Errors;
using System.Net;
using Microsoft.AspNetCore.Http;
using API.Helpers;

namespace API.Controllers
{

    public class ProductsController : BaseApiController
    {
        private readonly IGenericRepository<Product> _productRepository;
        private readonly IGenericRepository<ProductBrand> _productBrandRepository;
        private readonly IGenericRepository<ProductType> _productTypeRepository;
        public readonly IMapper _imapper;

        public ProductsController(
            IGenericRepository<Product> productRepository,
            IGenericRepository<ProductBrand> productBrandRepository,
            IGenericRepository<ProductType> productTypeRepository,
            IMapper imapper
            )
        {
            this._productRepository = productRepository;
            this._productBrandRepository = productBrandRepository;
            this._productTypeRepository = productTypeRepository;
            this._imapper = imapper;
        }

        [Cached(600)]
        [HttpGet]
        public async Task<ActionResult<Pagination<ProductToReturnDto>>> GetProducts([FromQuery] ProductSpecificationParams specificationParams)
        {
            var specification = new ProductsWithBrandsAndTypesSpecification(specificationParams);
            var countSpecification = new ProductsWithFiltersForCountSpecification(specificationParams);
            var totalItems = await _productRepository.CountAsync(countSpecification);
            var products = await this._productRepository.ListAllEntitiesWithSpecificationAsync(specification);
            var data = this._imapper.Map<IReadOnlyList<Product>, IReadOnlyList<ProductToReturnDto>>(products);

            var paginationResponse = new Pagination<ProductToReturnDto>(
                specificationParams.PageIndex,
                specificationParams.PageSize,
                totalItems,
                data
                );
            return Ok(paginationResponse);
        }

        [Cached(600)]
        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(ApiResponse), StatusCodes.Status404NotFound)]
        public async Task<ActionResult<ProductToReturnDto>> GetProduct(int id)
        {
            var specification = new ProductsWithBrandsAndTypesSpecification(id);
            var product = await this._productRepository.GetEntityWithSpecification(specification);
            if (product == null)
            {
                return NotFound(new ApiResponse(404, HttpStatusCode.NotFound.ToString()));
            }
            return Ok(this._imapper.Map<Product, ProductToReturnDto>(product));
        }

        [Cached(600)]
        [HttpGet("brands")]
        public async Task<ActionResult<List<ProductBrand>>> GetProductBrands()
        {
            var productBrands = await this._productBrandRepository.ListAllAsync();
            return Ok(productBrands);
        }

        [Cached(600)]
        [HttpGet("types")]
        public async Task<ActionResult<List<ProductType>>> GetProductTypes()
        {
            var productTypes = await this._productTypeRepository.ListAllAsync();
            return Ok(productTypes);
        }

    }
}