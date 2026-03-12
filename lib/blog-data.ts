export interface BlogPost {
    id: number;
    slug: string;
    date: string;
    title: string;
    excerpt: string;
    image: string;
    content: string[];
    author: {
        name: string;
        role: string;
        avatar: string;
    };
    category: string;
}

export const blogPosts: BlogPost[] = [
    {
        id: 1,
        slug: 'secret-beaches-southern-japan',
        date: 'March 10, 2026',
        title: 'The Secret Beaches of Southern Japan',
        excerpt: 'Discover the untouched coastal paradises of Okinawa, where luxury meets the emerald sea in ways you’ve never imagined.',
        image: 'https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&q=80&w=1200',
        category: 'GUIDES',
        author: {
            name: 'Kaito Tanaka',
            role: 'Senior Travel Curator',
            avatar: 'https://i.pravatar.cc/150?u=kaito'
        },
        content: [
            "Hidden far beyond the neon-lit streets of Tokyo and the ancient temples of Kyoto lies a version of Japan that few travelers ever witness. The Yaeyama Islands, a remote archipelago at the southern tip of Okinawa, offer a landscape of turquoise lagoons, white coral sands, and dense mangrove forests.",
            "Our journey begins on Taketomi Island, a place where time seems to have stood still. Here, the traditional Ryukyu culture is preserved with meticulous care. Strolling through the village of red-tiled houses topped with shisa (lion-dog) statues, one feels the slow pulse of an era long past.",
            "But the true allure lies in the water. Kondoi Beach, with its shallow, crystal-clear sea, is perfect for those seeking tranquility. At low tide, sandbars emerge, creating a surreal landscape where you can walk hundreds of meters into the ocean with the water barely reaching your ankles.",
            "For the ultimate luxury experience, we recommending the private villas at Hoshinoya Taketomi. Each pavilion is built to reflect the traditional architecture, offering total privacy and a deep connection to the island's spirit. As the sun sets, the lack of light pollution turns the sky into a velvet tapestry of stars, a reminder of the raw beauty of the natural world."
        ]
    },
    {
        id: 2,
        slug: 'architecture-alps-modern-escapes',
        date: 'March 05, 2026',
        title: 'Architecture of the Alps: Modern Escapes',
        excerpt: 'Exploring the intersection of brutalist design and natural majesty in the latest Swiss mountain retreats.',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=1200',
        category: 'DESIGN',
        author: {
            name: 'Elena Rossi',
            role: 'Architectural Critic',
            avatar: 'https://i.pravatar.cc/150?u=elena'
        },
        content: [
            "The Swiss Alps have long been associated with rustic wooden chalets and cozy mountain huts. However, a new wave of architectural innovation is sweeping through the valleys, replacing traditional kitsch with bold, minimalist structures that speak to the landscape's raw power.",
            "The 7132 Hotel in Vals is perhaps the most iconic example of this shift. Designed by Pritzker Prize-winner Peter Zumthor, the thermal baths are a masterpiece of quartzite and light. The architecture doesn't just sit on the land; it emerges from it, creating an almost monastic experience for the senses.",
            "Further south, near St. Moritz, we find residential projects that utilize 'raw' materials—exposed concrete, local stone, and massive floor-to-ceiling glass panels. These buildings are designed to frame the mountains, treating the peaks like living canvases that change with the passing hours.",
            "Modern luxury in the Alps is no longer about gold leaf and heavy carpets. It's about precision, silence, and the relationship between the built environment and the sublime scale of the mountains. It is a dialogue between human ingenuity and the eternal glacier."
        ]
    },
    {
        id: 3,
        slug: 'curation-vs-tourism-new-travel',
        date: 'February 28, 2026',
        title: 'Curation vs Tourism: The New Travel',
        excerpt: 'Why the modern elite are moving away from traditional sightseeing towards deep, curated cultural immersion.',
        image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&q=80&w=1200',
        category: 'EXPERIENCES',
        author: {
            name: 'Julian Vance',
            role: 'Culture Editor',
            avatar: 'https://i.pravatar.cc/150?u=julian'
        },
        content: [
            "The checklist traveler is a dying breed. In an age where every landmark has been geotagged a million times, the true luxury is no longer access to a place, but access to a feeling—a deeper understanding that can't be found in a guidebook.",
            "Curation is the antidote to the homogenization of global travel. It's the difference between standing in a queue at the Louvre and having a private dinner with a contemporary artist in their atelier. One is consumption; the other is connection.",
            "At VOYAGE, we've noticed a significant shift in our members' requests. They are increasingly seeking 'slow travel'—spending two weeks in a single Moroccan Riad rather than visiting five European capitals in ten days. They want to learn the ancient art of calligraphy, understand the complex history of spice routes, and meet the people who keep these traditions alive.",
            "True wealth is the ability to slow down. By curated every aspect of the journey, we remove the friction of modern logistics, allowing our travelers to fully immerse themselves in the 'now'. The future of travel isn't about where you go—it's about who you become along the way."
        ]
    }
];
