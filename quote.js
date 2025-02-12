const quotes = [
  {
    quote: 'You will face many defeats in life, but never let yourself be defeated. ',
    auther: 'Maya Angelou'
  },
  {
    quote: 'Age is no guarantee of maturity. ',
    auther: ' Lawana Blackwell'
  },
  {
    quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall. ',
    auther: 'Nelson Mandela'
  },
  {
    quote: 'This too shall pass. ',
    auther: 'Et hoc transibit'
  },
  {
    quote: 'Despite the forecast, live like it’s spring. ',
    auther: 'Lilly Pulitzer'
  }
];
const num = Math.floor(Math.random()*quotes.length);
const phrase = quotes[num];
const quoteElem = document.querySelector('.quote>p:nth-child(1)');
quoteElem.textContent = `"${phrase.quote}"`;
const autherElem = document.querySelector('.quote>p:nth-child(2)');
autherElem.textContent = `-${phrase.auther}-`;