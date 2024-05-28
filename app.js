const app = () => { 
    return {
        states: [],
        selectedState: '',
        cities: [],

        async getEstados() {
            try {
                const response = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
                this.states = response.data;
            } catch (error) {
                console.error('Erro ao obter os estados:', error);
            }
        }
    // ,
    // async getCidadesPorEstado(estadoId) {
    //     try {
    //         const response = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoId}/municipios`);
    //         this.cities = response.data;
    //     } catch (error) {
    //         console.error('Erro ao obter as cidades:', error);
    //     }
    // }
}
}