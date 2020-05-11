import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-produto',
  templateUrl: './delete-produto.component.html',
  styleUrls: ['./delete-produto.component.css']
})
export class DeleteProdutoComponent implements OnInit {

  produto = new Produto()

  constructor(private produtosService: ProdutoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    let id:number = this.route.snapshot.params["id"];
    this.findById(id)
  }

  findById(id:number) {
    this.produtosService.getByIdProduto(id).subscribe((resp: Produto)=> {
      this.produto = resp
    }, err => {
      console.log("Erro")
    });
  }

  btnSim() {
    this.produtosService.delete(this.produto.id).subscribe(()=> {
      this.router.navigate(['/loja']);
    }, err => {
      console.log(err)
    })
  }

  btnNao() {
    this.router.navigate(['/loja']);
  }
}
