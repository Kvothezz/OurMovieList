namespace OurMovieList.Models
{
	public class ListModel
	{
		public int Id { get; set; }

		public string Name { get; set; }

		public int UserId { get; set; }

		public UserModel User { get; set; }

		public ListModel(int id, string name,int userId)
		{
			Id = id;
			Name = name;
			UserId = userId;
		}

	}

}