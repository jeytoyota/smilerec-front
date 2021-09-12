import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tutor } from 'src/app/model/Tutor';
import { TutorService } from 'src/app/service/tutor.service';


@Component({
  selector: 'app-tutor-delete',
  templateUrl: './tutor-delete.component.html',
  styleUrls: ['./tutor-delete.component.css']
})
export class TutorDeleteComponent implements OnInit {

  tutor : Tutor = new Tutor()
  cdCadastro : number

  constructor(
    private tutorService: TutorService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){
    this.cdCadastro = this.route.snapshot.params['cdCadastro']
    this.findTutor(this.cdCadastro)
  }

  findTutor(id: number){
    this.tutorService.getTutor(id).subscribe((resp: Tutor)=>{
      this.tutor = resp
    })
  }

  apagar(id : number = this.cdCadastro){
    this.tutorService.deleteTutor(id).subscribe((resp: Tutor)=>{
      this.tutor = resp
      alert('Apagado com sucesso!')
      this.router.navigate(['/cadastro'])
    })
  }

}
