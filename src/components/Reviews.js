import React from 'react';
import { ReviewsContainer, ReviewItem } from '../styles/ReviewsStyles';

const Reviews = () => {
  return (
    <ReviewsContainer>
      <div>
        <div className='heading'>
          <div className='b-header'>
            <h2>Testimonial</h2>
            <p>Home / Testimonial</p>
          </div>
        </div>
      </div>
      <div className='review-bg'>
        <button type="submit">Find All Google reviews</button>
        <div className="reviews-text">
          <ReviewItem>
            <p>"I can't say enough about Priyanka,she is the best makeup artist in kolkata. I have ever seen,Thank u so much Priyanka for made my special days more special,ar khub bhalo akta meye,ato sundor bhabe 2to different looks dita hoito tumi e parte,ami khub happy tomake select kore,once again thank u so much priyanka."</p>
            <div class="text"><p>Jane</p></div>
          </ReviewItem> 
        </div>
      </div>
    </ReviewsContainer>
  );
};

export default Reviews;
