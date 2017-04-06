using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DigitalBulletJournal.Models
{
    public class Entry
    {
        [BsonId]
        public int id { get; set; }

        [BsonElement("text")]
        public String text { get; set; }
    }
}