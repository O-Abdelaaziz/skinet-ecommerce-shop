using System.Collections.Generic;
using System.Net;

namespace API.Errors
{
    public class ApiValidationErrorResponse : ApiResponse
    {
        public ApiValidationErrorResponse() : base(400, HttpStatusCode.BadRequest.ToString())
        {
        }
        public IEnumerable<string> Errors { get; set; }
    }
}
