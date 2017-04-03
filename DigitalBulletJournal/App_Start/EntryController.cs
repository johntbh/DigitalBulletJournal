using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
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

        // GET: api/Entry
        [Route("")]
        public String Get()
        {
            var documents = db.Posts.Find(new BsonDocument()).ToList();
            foreach( var document in documents)
            {
                document["_id"] = document["_id"].ToString();
            }
            return documents.ToJson();
        }

        // GET: api/Entry/5
        [Route("{id:int}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Entry
        [Route("")]
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Entry/5
        [Route("{id:int}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Entry/5
        [Route("{id:int}")]
        public void Delete(int id)
        {
        }
    }
}
