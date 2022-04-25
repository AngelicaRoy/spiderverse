const Spiderman=require('./../app/spiderman')

describe("Unit Test for Spiderman class", () => {
    test('1) Create an spiderman object', () => {
      
        const andrewGrafield = new Spiderman("Spiderman Sony", 31, "Andrew Garfield", 2, "Sony")
        expect(andrewGrafield.name).toBe("Spiderman Sony");
        expect(andrewGrafield.age).toBe(31);
        expect(andrewGrafield.actor).toBe("Andrew Garfield");
        expect(andrewGrafield.movies).toBe(31);
        expect(andrewGrafield.studio).toBe("Sony");
    });
    
    test('2) Use the method getInfo()',()=>{
        const tomHolland=new Spiderman("Spiderman Marvel",25,"Tom Holland",5,"Marvel");
        expect(tomHolland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel studio");
    });
  })
