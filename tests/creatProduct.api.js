import {test, expect} from "@playwright/test"

test('get product', async ({request})=>{
const response = await request.get('https://dummyjson.com/products/1')

expect(response).toBeOK();

});

test('search for product', async ({request})=>{
    const response = await request.get('https://dummyjson.com/products',{

        params:{
            limit:10,
            skip: 10,
            select: 'title'
        }


    });
    
    console.log (await response.json())
    expect(response).toBeOK();
})

test('add product', async ({request})=>{
    const response = await request.post('https://dummyjson.com/products/add',{

        data:{
            title: 'this is my prodoct'
        }

 
    
    });
    expect(response).toBeOK();
});

test('update_product', async ({request})=>{
    const response = await request.put('https://dummyjson.com/products/1',{

        data:{
            title: 'this is my prodoct updated'
        } 

    });
    expect(response).toBeOK();
});