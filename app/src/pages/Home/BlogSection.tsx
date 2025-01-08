import Image from 'next/image'
import Link from 'next/link'
export interface BlogPost {
    id: number
    title: string
    date: string
    image: string
    slug: string
  }
  
  export const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Understanding Customer Behavior: Personalization in Marketing",
      date: "SEP 12, 2024",
      image: "https://media.istockphoto.com/id/1472133974/photo/man-using-smart-phone-with-city-lights-in-the-background.jpg?s=612x612&w=0&k=20&c=kBIttH0Fp0mEJhsGi-s33WKxbC7rTCCgU8UgO8k8kCU=",
      slug: "understanding-customer-behavior"
    },
    {
      id: 2,
      title: "Why Data-Driven Marketing is Key to Business Growth",
      date: "OCT 22, 2024",
      image: "https://media.istockphoto.com/id/1818864225/photo/senior-engineer-in-server-room.jpg?s=612x612&w=0&k=20&c=i6x7jbLqpWnMd2FGZO1LeplGN-adJh7SVDGmQFokIdM=",
      slug: "data-driven-marketing"
    },
    {
      id: 3,
      title: "Email Marketing: Best Practices for Higher Open and Click-Through Rates",
      date: "AUG 16, 2024",
      image: "https://media.istockphoto.com/id/972523620/photo/woman-hand-touching-tablet-screen-browsing-internet-on-blurry-fiber-optic-bokeh-background.jpg?s=612x612&w=0&k=20&c=fp1MAecwh-yvs5gothzyGOCK7HxbVQ7JsoguL1shfDI=",
      slug: "email-marketing-best-practices"
    }
  ]
  

export default function BlogSection() {
  return (
    <section className=" w-full container mx-auto md:px-8 px-4 py-16">
      <h2 className="text-center text-4xl md:text-5xl font-bold mb-16">
        Latest from <span className="italic">Our Blog</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12 2xl:gap-20 mb-12">
        {blogPosts.map((post) => (
          <article 
            key={post.id}
            className="group bg-white rounded-2xl overflow-hidden hover:shadow-sm hover:border hover:border-purple-300 transition-shadow duration-300"
          >
            <Link href={`/blog/${post.slug}`} className=' overflow-hidden'>
              <div className="relative h-48 md:h-56 lg:h-64 2xl:h-72">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <time className="text-[#8257E9] text-sm font-medium">
                  {post.date}
                </time>
                <h3 className="mt-2 text-xl font-semibold leading-tight group-hover:text-[#8257E9] transition-colors duration-300">
                  {post.title}
                </h3>
                <div className="mt-4 inline-block">
                  <span className="text-gray-900 font-medium border-b-2 border-gray-900 group-hover:border-[#8257E9] group-hover:text-[#8257E9] transition-colors duration-300">
                    Read More
                  </span>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>

      <div className="text-center">
        <Link 
          href="/blog"
          className="inline-block px-8 py-3 rounded-full bg-[#8257E9] text-white font-medium hover:bg-[#724CC7] transition-colors duration-300"
        >
          View All Post
        </Link>
      </div>
    </section>
  )
}

