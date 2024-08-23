def criar_turma():
    print("Opção 1: Criar Turma selecionada.")

def adicionar_professor():
    print("Opção 2: Adicionar Professor selecionada.")

def adicionar_estudante():
    print("Opção 3: Adicionar Estudante selecionada.")

def adicionar_nota():
    print("Opção 4: Adicionar Nota selecionada.")

def consultar_nota():
    print("Opção 5: Consultar Nota selecionada.")

def salvar_nota():
    print("Opção 6: Salvar Nota selecionada.")

def sair():
    print("Opção 7: Sair selecionada.")
    return False

def opcao_invalida():
    print("Opção inválida! Por favor, escolha uma opção válida.")
    return True

def exibir_menu():
    print("\nMenu:")
    print("1. Criar Turma")
    print("2. Adicionar Professor")
    print("3. Adicionar Estudante")
    print("4. Adicionar Nota")
    print("5. Consultar Nota")
    print("6. Salvar Nota")
    print("7. Sair")

def main():
    opcoes = {
        "1": criar_turma,
        "2": adicionar_professor,
        "3": adicionar_estudante,
        "4": adicionar_nota,
        "5": consultar_nota,
        "6": salvar_nota,
        "7": sair
    }

    continuar = True
    while continuar:
        exibir_menu()
        opcao = input("Escolha uma opção: ")
        func = opcoes.get(opcao, opcao_invalida)
        continuar = func()

if __name__ == "__main__":
    main()
