// import { UserRepository } from '../../domain/interfaces/UserRepository';
// import { User } from '../../domain/entities/User';

// export class InMemoryUserRepository implements UserRepository {
//   private users: User[] = [
//     new User('1', 'John Doe', 'john@example.com'),
//     new User('2', 'Jane Doe', 'jane@example.com')
//   ];

//   async findById(id: string): Promise<User | null> {
//     return this.users.find(user => user.id === id) || null;
//   }
// }
