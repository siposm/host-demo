import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent implements OnInit {
	title: string = "Hosting demo"
	todos: string[] = []
	newTodo: string = ""
	words: string[] = []

	constructor(private http: HttpClient) {}

	ngOnInit(): void {
		this.todos.push("Tejet kell venni", "Kutyasétáltatás", "Bepakolni kirándulásra")
	}

	add(): void {
		this.todos.push(this.newTodo)
		this.newTodo = ""
	}

	download(): void {
		this.http.get<any>("https://api.siposm.hu/word").subscribe(x => {
			console.log(x)
			this.words = x
		})
	}
}
