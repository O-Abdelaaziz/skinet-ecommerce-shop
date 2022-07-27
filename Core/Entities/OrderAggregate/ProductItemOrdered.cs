namespace Core.Entities.OrderAggregate
{
    public class ProductItemOrdered
    {
        public ProductItemOrdered()
        {
        }

        public ProductItemOrdered(int productItemId, string productName, string productUrl)
        {
            ProductItemId = productItemId;
            ProductName = productName;
            PictureUrl  = productUrl;
        }

        public int ProductItemId { get; set; }
        public string ProductName { get; set; }
        public string PictureUrl  { get; set; }
    }
}
