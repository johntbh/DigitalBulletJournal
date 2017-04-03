using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

using MongoDB.Driver;
using MongoDB.Bson;

namespace DigitalBulletJournal.App_Start
{
    public class MongoDBContext
    {
        public static string ConnectionString { get; set; } = "mongodb://localhost:27017";
        public static string DatabaseName { get; set; } = "test";

        private IMongoDatabase _database { get; }

        public MongoDBContext()
        {
            try
            {
                var mongoClient = new MongoClient(ConnectionString);
                _database = mongoClient.GetDatabase(DatabaseName);
            }
            catch (Exception ex)
            {
                throw new Exception("Can not access to db server.", ex);
            }
        }

        public IMongoCollection<BsonDocument> Posts
        {
            get
            {
                return _database.GetCollection<BsonDocument>("entry");
            }
        }

    }
}