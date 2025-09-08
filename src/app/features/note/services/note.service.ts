import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ApiResponse } from '../../../shared/dto/api-response';
import { Note } from '../entity/note.entity';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private apiUrl = 'http://localhost:8000/api/v1/note';

  constructor(private http: HttpClient) {}

  // getAllNote
  getNotes(): Observable<ApiResponse<Note[]>> {
    return this.http.get<ApiResponse<Note[]>>(`${this.apiUrl}`).pipe(
      catchError(this.handleError)
    );
  }

  // getNoteById
  getNoteById(id: number): Observable<ApiResponse<Note>> {
    return this.http.get<ApiResponse<Note>>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // createNote
  addNote(note: Note): Observable<ApiResponse<Note>> {
    return this.http.post<ApiResponse<Note>>(`${this.apiUrl}`, note).pipe(
      catchError(this.handleError)
    );
  }

  // updateNote
  updateNote(id: number, note: Note): Observable<ApiResponse<Note>> {
    return this.http.put<ApiResponse<Note>>(`${this.apiUrl}/${id}`, note).pipe(
      catchError(this.handleError)
    );
  }

  // deleteNote
  deleteNote(id: number): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Internal Server Error';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = error.error.responseException || `Error Code: ${error.status}, Message: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
