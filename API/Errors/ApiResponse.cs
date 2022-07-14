using System;

namespace API.Errors
{
    public class ApiResponse
    {
        public ApiResponse(int statusCode, string statusDescription, string message = null)
        {
            StatusCode = statusCode;
            StatusDescription = statusDescription;
            Message = message ?? GetDeafaultMessageForStatusCode(statusCode);
            Date = DateTime.Now.ToString("dd-MM-yyyy hh:mm:ss");
        }

        public string Version { get { return "1.2.3"; } }
        public int StatusCode { get; set; }
        public string StatusDescription { get; private set; }
        public string Message { get; set; }
        public string Date { get; set; }

        private string GetDeafaultMessageForStatusCode(int statusCode)
        {
            return statusCode switch
            {
                204 => "No content, it was not",
                400 => "A bad request, you have made",
                401 => "Authorized, you are not",
                404 => "Resource found, it was not",
                500 => "Errors are the path to the dark side.  Errors lead to anger.   Anger leads to hate.  Hate leads to career change.",
                _ => null
            };
        }
    }
}
