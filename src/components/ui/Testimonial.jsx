import React from 'react';
import MaxWidth from '../Shared/MaxWidth';
import SectionTitle from '../Shared/SectionTitle';
import Heading from '../Shared/Heading';
import ReviewDiv from '../Shared/ReviewDiv';

const reviews = [
    {
        _id:1,
        title:'Expertise and Compassion Combined',
        message:"I can't thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.",
        name:'Sarah D,',
        profassion : 'IT Professional',
        image:'/Media/client1.png'
},
    {
        _id:2,
        title:'Life-Saving Care, Life-Changing Experience',
        message:"My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life.",
        name:'Michael R,',
        profassion : 'Business Executive',
        image:'/Media/client2.png'
},
    {
        _id:3,
        title:"A Partner in Health and Wellness",
        message:"As a busy professional, I appreciate the convenience and quality of care I receive at [Healthcare Provider Name]. From telemedicine consultations to routine check-ups, they've become my trusted partner in health and",
        name:'David S, Lawyer',
        profassion : 'IT Professional',
        image:'/Media/client3.png'
},
]

const Testimonial = () => {
    return (
        <section className='mt-40'>
            <MaxWidth>
                <div>
                    <SectionTitle text='Testimonial'/>
                    <Heading text='What they say about us' className="max-w-[420px]"/>
                    <div className='grid grid-cols-3 gap-x-6 mt-8'>
                        {
                            reviews && reviews.map(review => <ReviewDiv details={review} key={review._id} />)
                        }
                    </div>
                </div>
            </MaxWidth>
        </section>
    );
};

export default Testimonial;