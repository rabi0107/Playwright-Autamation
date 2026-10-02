import{test,expect} from '@playwright/test';
test('test1',async({page})=>{
console.log("This test 1")

})

test.skip('test2',async({page})=>{

    console.log("This test 2")
})

test.fail('test3',async({page})=>{

    console.log("This test 3")
    expect(10).toBe(20);
})

test.fixme('test4',async({page})=>{

    console.log("This test 4")
})

test('test5',async({page})=>{
     test.slow()
    console.log("This test 5")
})
