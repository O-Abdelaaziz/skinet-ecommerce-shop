using API.Errors;
using Infrastructure.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace API.Controllers
{
    public class BuggyController : BaseApiController
    {
        private readonly StoreContext _storeContext;

        public BuggyController(StoreContext storeContext)
        {
            this._storeContext = storeContext;
        }

        [HttpGet("testauth")]
        [Authorize]
        public ActionResult<string> GetSecretText()
        {
            return "secret stuff";
        }


        [HttpGet("not-found")]
        public ActionResult GetNotFoundRequest()
        {
            var product = this._storeContext.Products.Find(50);
            if (product != null)
            {
                return Ok(product);
            }

            return NotFound(new ApiResponse(404, HttpStatusCode.NotFound.ToString()));
        }

        [HttpGet("server-error")]
        public ActionResult GetServerErrorRequest()
        {
            var product = this._storeContext.Products.Find(50); // this is null
            var productToString = product.ToString(); // this make server error bcs product is null

            return Ok(new ApiResponse(500, HttpStatusCode.InternalServerError.ToString()));
        }

        [HttpGet("bad-request")]
        public ActionResult GetBadRequest()
        {
            return BadRequest(new ApiResponse(400, HttpStatusCode.BadRequest.ToString()));
        }

        [HttpGet("bad-request/{id}")]
        public ActionResult GetNotFoundRequest(int id)
        {
            return Ok();
        }
    }
}
