
using API.Dtos;
using AutoMapper;
using Core.Entities.OrderAggregate;
using Microsoft.Extensions.Configuration;

namespace API.Helpers
{
    public class OrderItemPictureUrlResolver : IValueResolver<OrderItem, OrderItemDto, string>
    {
        private readonly IConfiguration _config;
        public OrderItemPictureUrlResolver(IConfiguration config)
        {
            _config = config;
        }

        public string Resolve(OrderItem source, OrderItemDto destination, string destMember, ResolutionContext context)
        {
            if (!string.IsNullOrEmpty(source.ItemOrdered.ProductUrl))
            {
                return _config["ApiUrl"] + source.ItemOrdered.ProductUrl;
            }

            return null;
        }
    }
}
