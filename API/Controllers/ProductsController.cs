using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController: ControllerBase
    {
        [HttpGet]
        public string GetProducts()
        {
            return "This will be a list of products";
        }

        [HttpGet("{id}")]
        public string GetProduct(int id)
        {
            return "This will be a single product :" + id;
        }
        
    }
}