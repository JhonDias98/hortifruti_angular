import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-put-produto',
  templateUrl: './put-produto.component.html',
  styleUrls: ['./put-produto.component.css']
})
export class PutProdutoComponent implements OnInit {

  produto: Produto = new Produto()
  id:number

  constructor(private produtoService: ProdutoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.findById(this.id);
  }

  findById(id:number) {
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto)=> {
      this.produto = resp;
    })
  }

  atualizar() {
    this.produtoService.putProduto(this.produto).subscribe((resp: Produto)=> {
      this.produto = resp;
      this.router.navigate(['/loja'])
    })
  }

}
