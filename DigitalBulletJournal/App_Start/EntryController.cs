using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web.Query;
using System.Net.Http;
using System.Web.Http;

using Newtonsoft.Json.Linq;
using Newtonsoft.Json;
using MongoDB.Bson;
using MongoDB.Driver;

namespace DigitalBulletJournal.App_Start
{
    [RoutePrefix("api/entries")]
    public class EntryController : ApiController
    {
        MongoDBContext db = new MongoDBContext();

        // GET: api/entries
        [Route("")]
        public String Get()
        {
            var fields = Builders<BsonDocument>.Projection.Exclude("_id");
            var documents = db.Posts.Find(new BsonDocument()).Project<BsonDocument>(fields).ToList();
            return documents.ToJson();
        }

        // GET: api/entries/5
        [Route("{id:int}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/entries
        [Route("")]
        public void Post([FromBody]string value)
        {
            var sort = Builders<BsonDocument>.Sort.Descending("id");
            var documentid = db.Posts.Find<BsonDocument>(new BsonDocument()).Sort(sort).FirstOrDefault();

            var obj = JsonConvert.DeserializeObject(value);
            var document = BsonDocument.Create(obj);

            document["id"] = (int)documentid["id"] + 1;
            db.Posts.InsertOne(document);
        }

        // PUT: api/entries/5
        [Route("{id:int}")]
        public void Put(int id, [FromBody]string value)
        {
            var document = JsonConvert.DeserializeObject<BsonDocument>(value);

            var query = Builders<BsonDocument>.Filter.Eq("id", id);
            var set = Builders<BsonDocument>.Update.Set("text", document["text"]);

            db.Posts.UpdateOne(query, set);
        }

        // DELETE: api/entries/5
        [Route("{id:int}")]
        public void Delete(int id)
        {
            var query = Builders<BsonDocument>.Filter.Eq("id", id);
            db.Posts.DeleteOne(query);
        }
    }
}
