
import {getCommentCounts} from  '../modules/showMealComments'

describe('counts number of comments',()=>{
  it('check length of the array of three comments', () => {
    const comments=[{name:'juma',comment:'nice meal'},
                    {name:'abdallah',comment:'nice cake'},
                    {name:'edwin',comment:'nice soup'},
                    ];
    expect(getCommentCounts(comments)).toBe(3);
  });

  it('check length of empty array', () => {
    const comments=[];
    expect(getCommentCounts(comments)).toBe(0);
  });
});

