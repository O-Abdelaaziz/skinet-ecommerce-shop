using System;
using System.IO;
using System.Linq;
using Core.Entities;
using System.Text.Json;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;

namespace Infrastructure.Data
{
    public class StoreContextSeed
    {
        public static async Task SeedAsync(StoreContext storeContext, ILoggerFactory loggerFactory)
        {
            try
            {
                if (!storeContext.ProductBrands.Any())
                {
                    string fildPath = "../Infrastructure/Data/SeedData/brands.json";
                    var brandData = File.ReadAllText(fildPath);
                    var brands = JsonSerializer.Deserialize<List<ProductBrand>>(brandData);

                    foreach (var item in brands)
                    {
                        storeContext.ProductBrands.Add(item);
                    }
                    await storeContext.SaveChangesAsync();
                }

                if (!storeContext.ProductTypes.Any())
                {
                    string fildPath = "../Infrastructure/Data/SeedData/types.json";
                    var typeData = File.ReadAllText(fildPath);
                    var types = JsonSerializer.Deserialize<List<ProductType>>(typeData);

                    foreach (var item in types)
                    {
                        storeContext.ProductTypes.Add(item);
                    }
                    await storeContext.SaveChangesAsync();
                }

                if (!storeContext.Products.Any())
                {
                    string fildPath = "../Infrastructure/Data/SeedData/products.json";
                    var productData = File.ReadAllText(fildPath);
                    var products = JsonSerializer.Deserialize<List<Product>>(productData);

                    foreach (var item in products)
                    {
                        storeContext.Products.Add(item);
                    }
                    await storeContext.SaveChangesAsync();
                }
            }
            catch (Exception ex)
            {
                var logger = loggerFactory.CreateLogger<StoreContextSeed>();
                logger.LogError("An Error occured during seeding the tables.", ex.Message);
            }
        }
    }
}
