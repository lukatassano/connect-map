import type { TranslationType } from "../../types/translate.types";

const translations: TranslationType = {
	title: "Connect Map",
	home: "Início",
	appName: "Connect Map",
	back: "Voltar",
	next: "Próximo",
	submit: "Enviar",
	register: "Cadastrar",
	requiredField: "Campo obrigatório",
	footerDescription: "Descrição do rodapé",
	developedBy: "Desenvolvido pela",
	companyName: "<nome da empresa>",
	seeMore: "Ver mais",
	foundPins: "{{quantity}} pins encontrados nesta região",
	emptyMessage:
		"Ops, não encontramos ninguém nessa localização com estes filtros...",
	personalData: {
		personalData: "Dados pessoais",
		name: "Nome",
		phone: "Telefone",
		email: "Email",
	},
	oops: "Ops...",
	address: {
		zipCode: "CEP",
		street: "Logradouro",
		number: "Número",
		district: "Bairro",
		complement: "Complemento",
		city: "Cidade",
		state: "Estado",
		country: "País",
		zipCodePlaceholder: "99999-999",
		address: "Endereço",
		addressNotFound:
			"Não conseguimos encontrar o endereço fornecido. Você pode tentar revisar o endereço ou inserir manualmente o pin no local correto no mapa.",
		reviewAddress: "Revisar endereço",
	},
	selectedPin: {
		address: "Endereço",
		contact: "Contato",
		phone: "Telefone",
		email: "Email",
		call: "Ligar",
		whatsapp: "Whatsapp",
		maps: "Maps",
		loading: "Carregando",
		callTooltip: "Ligar",
		whatsappTooltip: "Chamar no Whatsapp",
		mapsTooltip: "Abrir endereço no Maps",
	},
};

export default translations;
