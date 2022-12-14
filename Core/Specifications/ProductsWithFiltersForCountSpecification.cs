using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Specifications
{
    public class ProductsWithFiltersForCountSpecification : BaseSpecification<Product>
    {
        public ProductsWithFiltersForCountSpecification(ProductSpecificationParams specificationParams) : base(
            x =>
            (string.IsNullOrEmpty(specificationParams.Search) || x.Name.ToLower().Contains(specificationParams.Search)) &&
            (!specificationParams.BrandId.HasValue || x.ProductBrandId == specificationParams.BrandId) &&
            (!specificationParams.TypeId.HasValue || x.ProductTypeId == specificationParams.TypeId)
            )
        {
        }
    }
}
