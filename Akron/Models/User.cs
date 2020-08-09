using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Akron.Models
{
    public class User
    {
        public User(string name)
        {
            Name = name;
        }
        public string Name { get; set; }
        public bool CanDownload { get; set; }
        public bool CanDelete { get; set; }
        public bool CanModify { get; set; }
        public bool CanCreate { get; set; }
        public bool CanRead { get; set; }
    }
}
