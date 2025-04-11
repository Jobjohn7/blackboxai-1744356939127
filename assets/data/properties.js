const properties = [
    {
        id: 1,
        title: "Luxury Villa with Ocean View",
        price: 850000,
        location: {
            address: "123 Palm Street",
            city: "Miami",
            state: "FL",
            zip: "33101"
        },
        details: {
            beds: 4,
            baths: 3,
            sqft: 2500,
            type: "Villa"
        },
        images: [
            "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg",
            "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg",
            "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg"
        ],
        description: "Stunning luxury villa with breathtaking ocean views. Features include a gourmet kitchen, private pool, and spacious master suite.",
        features: [
            "Ocean View",
            "Private Pool",
            "Gourmet Kitchen",
            "Smart Home System",
            "Wine Cellar"
        ],
        listed: "2024-01-15",
        agent: {
            name: "Sarah Johnson",
            phone: "(555) 123-4567",
            email: "sarah.j@dreamhome.com"
        }
    },
    {
        id: 2,
        title: "Modern Downtown Apartment",
        price: 425000,
        location: {
            address: "456 Downtown Ave",
            city: "New York",
            state: "NY",
            zip: "10001"
        },
        details: {
            beds: 2,
            baths: 2,
            sqft: 1200,
            type: "Apartment"
        },
        images: [
            "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
            "https://images.pexels.com/photos/323781/pexels-photo-323781.jpeg",
            "https://images.pexels.com/photos/323782/pexels-photo-323782.jpeg"
        ],
        description: "Luxurious apartment in the heart of downtown. Floor-to-ceiling windows, modern finishes, and state-of-the-art appliances.",
        features: [
            "City Views",
            "Fitness Center",
            "Concierge Service",
            "Rooftop Terrace",
            "Parking Space"
        ],
        listed: "2024-01-10",
        agent: {
            name: "Michael Chen",
            phone: "(555) 234-5678",
            email: "michael.c@dreamhome.com"
        }
    },
    {
        id: 3,
        title: "Suburban Family Home",
        price: 675000,
        location: {
            address: "789 Suburban Dr",
            city: "Los Angeles",
            state: "CA",
            zip: "90001"
        },
        details: {
            beds: 3,
            baths: 2.5,
            sqft: 2000,
            type: "House"
        },
        images: [
            "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg",
            "https://images.pexels.com/photos/1029600/pexels-photo-1029600.jpeg",
            "https://images.pexels.com/photos/1029601/pexels-photo-1029601.jpeg"
        ],
        description: "Beautiful family home in a quiet suburban neighborhood. Spacious backyard, updated kitchen, and close to excellent schools.",
        features: [
            "Large Backyard",
            "Updated Kitchen",
            "Garage",
            "Near Schools",
            "Quiet Neighborhood"
        ],
        listed: "2024-01-20",
        agent: {
            name: "David Wilson",
            phone: "(555) 345-6789",
            email: "david.w@dreamhome.com"
        }
    }
];

export default properties;
