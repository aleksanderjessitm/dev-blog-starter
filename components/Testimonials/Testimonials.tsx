import { config } from '../../blogConfig';
import Testimonial from './Testimonial';

function Testimonials() {
    return (
        <section className="mt-10 mb-20 text-gray-700 px-8 mx-auto">
            <div className="text-center md:max-w-xl lg:max-w-3xl mx-auto">
                <h3 className="text-3xl font-bold mb-6 text-gray-800">Testimonials</h3>
                <p className="mb-6 pb-2 md:mb-12 md:pb-0">
                    If I said I am a great specialist, you probably wouldn&apos;t believe me. Don&apos;t take my word for it - take theirs, instead.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-12 text-center">
                {config.testimonials.map(testimonial => {
                    return <Testimonial fullName={testimonial.fullName} position={testimonial.position} testimonial={testimonial.testimonial} />
                })}
            </div>
        </section>
    )
}

export default Testimonials