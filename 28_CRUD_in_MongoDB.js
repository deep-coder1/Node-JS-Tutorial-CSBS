// CRUD Operations in MongoDB

// How to insert data Collection.
// How to check inserted Data.
// How to Update Data.
// How to delete Data.
// Interview Questions.


// MongoDB Shell CRUD.

// show dbs
// admin      40.00 KiB
// config    108.00 KiB
// deepakdb    8.00 KiB
// local      40.00 KiB
// use youtubedb
// switched to db youtubedb
// db.createCollection("videos")
// { ok: 1 }
// show dbs
// admin       40.00 KiB
// config     108.00 KiB
// deepakdb     8.00 KiB
// local       40.00 KiB
// youtubedb    8.00 KiB
// db.createCollection("videos")
// { ok: 1 }
// show dbs
// admin       40.00 KiB
// config     108.00 KiB
// deepakdb     8.00 KiB
// local       40.00 KiB
// youtubedb    8.00 KiB
// show collections
// videos
// db.createCollection("playlists")
// { ok: 1 }
// db.playlists.drop()
// true
// show collections
// videos
// show dbs
// admin       40.00 KiB
// config     108.00 KiB
// deepakdb     8.00 KiB
// local       40.00 KiB
// youtubedb    8.00 KiB
// db.dropDatabase()
// { ok: 1, dropped: 'youtubedb' }
// db
// youtubedb
// show dbs
// admin      40.00 KiB
// config    108.00 KiB
// deepakdb    8.00 KiB
// local      40.00 KiB
// use deepakdb
// switched to db deepakdb
// db
// deepakdb
// use e-comm
// switched to db e-comm
// db.products.insertOne({name:'f15', brand:'samsung', price:450, category:'mobile'})
// {
//   acknowledged: true,
//   insertedId: ObjectId('65d74fd317e6a1588ac49521')
// }
// db.products.insertOne({name:'iphone 15', brand:'apple', price:1250, category:'mobile'})
// {
//   acknowledged: true,
//   insertedId: ObjectId('65d75bcc17e6a1588ac49522')
// }
// db.products.find()
// {
//   _id: ObjectId('65d74fd317e6a1588ac49521'),
//   name: 'f15',
//   brand: 'samsung',
//   price: 450,
//   category: 'mobile'
// }
// {
//   _id: ObjectId('65d75bcc17e6a1588ac49522'),
//   name: 'iphone 15',
//   brand: 'apple',
//   price: 1250,
//   category: 'mobile'
// }
// {
//   _id: ObjectId('65d75bfca51ec0f3cedf4928'),
//   name: 'redmi 13',
//   brand: 'redmi',
//   price: 200,
//   category: 'mobile'
// }
// db.products.updateOne({name:'redmi 13'}, {$set:{brand:'mi'}})
// {
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 1,
//   modifiedCount: 1,
//   upsertedCount: 0
// }
// db.products.deleteOne({brand:'apple'})
// {
//   acknowledged: true,
//   deletedCount: 1
// }
// e-comm


// 04:49:37 Video Time End