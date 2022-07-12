using Core.Entities;
using Core.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Infrastructure.Data
{
    public class ProductRepository : IProductRepository
    {
        private readonly StoreContext _storeContext;

        public ProductRepository(StoreContext storeContext)
        {
            this._storeContext = storeContext;
        }

        public async Task<IReadOnlyList<Product>> GetProductsAsync()
        {
            return await this._storeContext.Products.ToListAsync();
        }

        public async Task<Product> GetProductByIdAsync(int id)
        {
            return await this._storeContext.Products.FindAsync(id);
        }
    }
}
