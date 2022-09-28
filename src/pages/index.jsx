"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PageTitle_1 = __importDefault(require("ui/components/data-display/PageTitle/PageTitle"));
const UserInformation_1 = __importDefault(require("ui/components/data-display/UserInformation/UserInformation"));
const SafeEnvironment_1 = __importDefault(require("ui/components/feedback/SafeEnvironment/SafeEnvironment"));
const TextFieldMask_1 = __importDefault(require("ui/components/inputs/TextFieldMask/TextFieldMask"));
const core_1 = require("@material-ui/core");
const index_style_1 = require("@styles/pages/index.style");
const useIndex_page_1 = __importDefault(require("data/hooks/pages/useIndex.page"));
function Home() {
    const { cep, setCep, cepValido, getProfissionais, erro, diaristas, buscaFeita, carregando, diaristasRestantes, } = (0, useIndex_page_1.default)();
    return (<div>
      <SafeEnvironment_1.default />
      <PageTitle_1.default title={"Conheça os profissionais"} subtitle={"Preencha seu endereço e veja todos os profissionais da sua localidade"}/>
      <core_1.Container>
        <index_style_1.FormElementsContainer>
          <TextFieldMask_1.default variant={"outlined"} mask={"99.999-999"} label={"Digite seu CEP"} fullWidth value={cep} onChange={(e) => setCep(e.target.value)}/>

          {erro && <core_1.Typography color={"error"}>{erro}</core_1.Typography>}
          <core_1.Button disabled={!cepValido || carregando} onClick={() => getProfissionais(cep)} variant={"contained"} sx={{ width: 220 }} color={"secondary"}>
            {" "}
            {carregando ? <core_1.CircularProgress size={20}/> : "Buscar"}
          </core_1.Button>
        </index_style_1.FormElementsContainer>

        {buscaFeita &&
            (diaristas.length > 0 ? (<index_style_1.ProfissionaisPaper>
              <index_style_1.ProfissionaisContainer>
                {diaristas.map((item, index) => {
                    return (<UserInformation_1.default key={index} name={item.nome_completo} rating={item.reputacao} description={item.cidade}/>);
                })}
              </index_style_1.ProfissionaisContainer>
              <core_1.Container sx={{ textAlign: "center" }}>
                {diaristasRestantes > 0 && (<core_1.Typography sx={{ mt: 5 }}>
                    ... e mais {diaristasRestantes}{" "}
                    {diaristasRestantes > 1
                        ? "profissionais atendem"
                        : "profissional atende"}{" "}
                    ao seu endereço.
                  </core_1.Typography>)}
                <core_1.Button variant="contained" color="secondary" sx={{ mt: 5 }}>
                  Contratar um profissional
                </core_1.Button>
              </core_1.Container>
            </index_style_1.ProfissionaisPaper>) : (<core_1.Typography align="center" color="textPrimary">
              Ainda não temos nenhuma diarista disponível em sua ragião!
            </core_1.Typography>))}
      </core_1.Container>
    </div>);
}
exports.default = Home;
