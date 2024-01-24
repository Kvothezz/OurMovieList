namespace OurMovieList.Models
{
	public class MovieListModel
	{
		public int IdList { get; set; }

		public int IdUser { get; set; }

		public bool Watched { get; set; }

		public ListModel List { get; set; }
        public MovieModel Movie {get; set; }




	}

}