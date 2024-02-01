namespace OurMovieList.Models
{

public class UserModel
{

		public int Id { get; set; }
		public string Name { get; set; }
		public string Email { get; set; }
		public string Password { get; set; }

		public ICollection<ListModel>? Listas{ get; set;}

	public UserModel(int id, string nome, string email, string password)
	{
		Id = id;
		Name = nome;
		Email = email;
		Password = password;
	}

	}
}

