namespace Core.Entities.OrderAggregate
{
    public class OrderItemBase
    {

        public ProductItemOrdered ItemOrdered { get; set; }
        public decimal Price { get; set; }
        public int Quantity { get; set; }
    }
}