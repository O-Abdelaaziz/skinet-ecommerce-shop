using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Core.Entities;
using Core.Interfaces;
using Core.Specifications;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        private readonly IGenericRepository<Product> _productRepository;
        private readonly IGenericRepository<ProductBrand> _productBrandRepository;
        private readonly IGenericRepository<ProductType> _productTypeRepository;

        public ProductsController(
            IGenericRepository<Product> productRepository,
            IGenericRepository<ProductBrand> productBrandRepository,
            IGenericRepository<ProductType> productTypeRepository
            )
        {
            this._productRepository = productRepository;
            this._productBrandRepository = productBrandRepository;
            this._productTypeRepository = productTypeRepository;
        }

        [HttpGet]
        public async Task<ActionResult<List<Product>>> GetProducts()
        {
            var specification = new ProductsWithBrandsAndTypesSpecification();
            var products = await this._productRepository.ListAllEntitiesWithSpecificationAsync(specification);
            return Ok(products);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProduct(int id)
        {
            var specification = new ProductsWithBrandsAndTypesSpecification(id);
            var product = await this._productRepository.GetEntityWithSpecification(specification);
            return Ok(product);
        }

        [HttpGet("brands")]
        public async Task<ActionResult<List<ProductBrand>>> GetProductBrands()
        {
            var productBrands = await this._productBrandRepository.ListAllAsync();
            return Ok(productBrands);
        }

        [HttpGet("types")]
        public async Task<ActionResult<List<ProductType>>> GetProductTypes()
        {
            var productTypes = await this._productTypeRepository.ListAllAsync();
            return Ok(productTypes);
        }

    }
}