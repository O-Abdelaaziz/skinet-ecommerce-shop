namespace API.Errors
{
    public class ApiException : ApiResponse
    {
        public ApiException(int statusCode, string statusDescription, string message = null, string details = null) : base(statusCode, statusDescription, message)
        {
            Details = details;
        }

        public string Details { get; set; }
    }
}
