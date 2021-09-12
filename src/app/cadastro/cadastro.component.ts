import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tutor } from '../model/Tutor';
import { TutorService } from '../service/tutor.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  listaTutores : Tutor[]
  tutor: Tutor = new Tutor()

  constructor(
    private router: Router,
    private tutorService: TutorService
  ) { }

  ngOnInit(){
    this.findAllTutores()
  }

  findAllTutores(){
    this.tutorService.getAllTutores().subscribe((resp: Tutor[])=>{
      this.listaTutores = resp
    })
  }

  cadastrarTutor(){
    this.tutorService.postTutor(this.tutor).subscribe((resp: Tutor)=>{
      this.tutor = resp
      this.findAllTutores()
      this.tutor = new Tutor()
      alert('Cadastrado com sucesso!')
    })
  }


}
