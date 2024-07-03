import React from 'react';
import MaxWidth from '../Shared/MaxWidth';
import SectionTitle from '../Shared/SectionTitle';
import Heading from '../Shared/Heading';

const Faq = () => {
    return (
        <section className='mt-40'>
            <MaxWidth>
                <div className='lg:px-0 px-5'>
                    <SectionTitle text='FAQ'/>
                    <Heading text='Frequntly Asked Question' />
                    <div className='space-y-3 mt-8'>
                    <div className="collapse collapse-arrow bg-[#FFFFF5]">
  <input type="radio" name="my-accordion-2" defaultChecked />
  <div className="collapse-title text-xl font-medium text-primary">What are your office hours?</div>
  <div className="collapse-content">
    <p className='text-base text-[#343268] font-normal'>Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-[#FFFFF5]">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium text-primary">How can I schedule an appointment?</div>
  <div className="collapse-content">
    <p className='text-base text-[#343268] font-normal'>hello</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-[#FFFFF5]">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium text-primary">Do you accept insurance?</div>
  <div className="collapse-content">
    <p className='text-base text-[#343268] font-normal'>hello</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-[#FFFFF5]">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium text-primary">What should I bring to my appointment?</div>
  <div className="collapse-content">
    <p className='text-base text-[#343268] font-normal'>hello</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-[#FFFFF5]">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium text-primary">Do you offer telemedicine appointments?</div>
  <div className="collapse-content">
    <p className='text-base text-[#343268] font-normal'>hello</p>
  </div>
</div>
                    </div>
                </div>
            </MaxWidth>
        </section>
    );
};

export default Faq;