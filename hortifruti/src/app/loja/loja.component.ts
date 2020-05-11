import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css']
})

export class LojaComponent implements OnInit {

  key = 'data';
  reverve = true;

  listaProdutos: Produto[]

  produto: Produto = new Produto()


  
  id:number;

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
    this.findAllProdutos()
  }

  findAllProdutos() {
    this.produtoService.getAllProdutos().subscribe((resp: Produto[])=> {
      this.listaProdutos = resp
    })
  }

  // findById(id:number) {
  //   this.produtoService.getByIdProduto(id).subscribe((resp: Produto)=> {
  //     this.produto=resp
  //   }, err => {
  //     console.log("Não precisa do ID")
  //   })
  // }

  publicar() {
    this.produtoService.postProduto(this.produto).subscribe((resp: Produto)=> {
      this.produto = resp;
      location.assign('/loja');
    })
  }

}
