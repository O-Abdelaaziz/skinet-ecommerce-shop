using Infrastructure.Data;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Controllers
{
    public class BuggyController : BaseApiController
    {
        private readonly StoreContext _storeContext;

        public BuggyController(StoreContext storeContext)
        {
            this._storeContext = storeContext;
        }

        [HttpGet("not-found")]
        public ActionResult GetNotFoundRequest()
        {
            var product = this._storeContext.Products.Find(50);
            if (product != null)
            {
                return Ok(product);
            }
            return NotFound("no Product found with provided id: " + 50);
        }

        [HttpGet("server-error")]
        public ActionResult GetServerErrorRequest()
        {
            var product = this._storeContext.Products.Find(50); // this is null
            var productToString = product.ToString(); // this make server error bcs product is null

            return Ok();
        }

        [HttpGet("bad-request")]
        public ActionResult GetBadRequest()
        {
            return BadRequest();
        }

        [HttpGet("bad-request/{id}")]
        public ActionResult GetNotFoundRequest(int id)
        {
            return Ok();
        }
    }
}
