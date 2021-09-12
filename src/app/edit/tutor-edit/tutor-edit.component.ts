import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tutor } from 'src/app/model/Tutor';
import { TutorService } from 'src/app/service/tutor.service';

@Component({
  selector: 'app-tutor-edit',
  templateUrl: './tutor-edit.component.html',
  styleUrls: ['./tutor-edit.component.css']
})
export class TutorEditComponent implements OnInit {

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

  atualizar(){
    this.tutorService.putTutor(this.tutor).subscribe((resp: Tutor)=>{
      this.tutor = resp
      this.router.navigate(['/cadastro'])
    })
  }

}
