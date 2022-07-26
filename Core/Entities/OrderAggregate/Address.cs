namespace Core.Entities.OrderAggregate
{
    public class Address
    {
        public Address()
        {
        }

        public Address(string firstName, string lastName, string country, string city, string street, string state, string zipCode)
        {
            FirstName = firstName;
            LastName = lastName;
            Country = country;
            City = city;
            Street = street;
            State = state;
            ZipCode = zipCode;
        }

        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Country { get; set; }
        public string City { get; set; }
        public string Street { get; set; }
        public string State { get; set; }
        public string ZipCode { get; set; }
    }
}
