using System.Runtime.Serialization;

namespace Core.Entities.OrderAggregate
{
    public enum OrderStatus
    {
        [EnumMember(Value = "Pending")]
        Pending,
        [EnumMember(Value = "Payment Receved")]
        PaymentReceved,

        [EnumMember(Value = "Payemnt Failed")]
        PayemntFailed,

        [EnumMember(Value = "Shipped")]
        Shipped,
    }
}
