namespace OurMovieList.Models
{
	public class MovieListModel
	{
		public int ListId { get; set; }

		public int UserId { get; set; }

		public bool Watched { get; set; }

		public ListModel List { get; set; }
        public MovieModel Movie {get; set; }

		public MovieListModel(int listId,int userId, bool watched)
		{
			ListId = listId;
			UserId = userId;
			Watched = watched;
		}


	}

}