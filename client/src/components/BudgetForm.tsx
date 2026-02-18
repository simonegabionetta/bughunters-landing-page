import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Loader2, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

export default function BudgetForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectType: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.company || !formData.projectType) {
      toast.error("Por favor, preencha todos os campos obrigatórios");
      return;
    }

    setIsLoading(true);

    try {
      // Enviar para Google Sheets via Google Apps Script Web App
      const googleSheetsUrl = "https://script.google.com/macros/d/AKfycbw_placeholder/usercopy"; // Substitua com sua URL real
      
      const payload = {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        phone: formData.phone,
        projectType: formData.projectType,
        message: formData.message,
        timestamp: new Date().toLocaleString('pt-BR')
      };

      const response = await fetch(googleSheetsUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      // Com no-cors, não podemos verificar a resposta, mas o envio foi feito
      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        projectType: "",
        message: ""
      });

      toast.success("Orçamento solicitado com sucesso! Entraremos em contato em breve.");
      
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      console.error("Erro ao enviar:", error);
      toast.error("Erro ao enviar formulário. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="w-full max-w-2xl mx-auto">
        <div className="flex flex-col items-center justify-center py-12 px-6 bg-gradient-to-br from-green-400/10 to-transparent border border-green-400/30 rounded-lg">
          <CheckCircle2 className="w-16 h-16 text-green-400 mb-4" />
          <h3 className="text-2xl font-bold text-white mb-2">Orçamento Enviado!</h3>
          <p className="text-gray-300 text-center mb-4">
            Obrigado por solicitar um orçamento. Nossa equipe entrará em contato com você em breve.
          </p>
          <p className="text-sm text-gray-400">
            Verifique seu email para confirmação
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Nome */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
            Nome Completo *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Seu nome"
            className="w-full px-4 py-3 bg-[#1A1F3A] border border-green-400/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400/50 transition-all"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="seu.email@empresa.com"
            className="w-full px-4 py-3 bg-[#1A1F3A] border border-green-400/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400/50 transition-all"
            required
          />
        </div>

        {/* Empresa */}
        <div>
          <label htmlFor="company" className="block text-sm font-semibold text-white mb-2">
            Empresa *
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Nome da sua empresa"
            className="w-full px-4 py-3 bg-[#1A1F3A] border border-green-400/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400/50 transition-all"
            required
          />
        </div>

        {/* Telefone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-white mb-2">
            Telefone / WhatsApp
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(11) 99999-9999"
            className="w-full px-4 py-3 bg-[#1A1F3A] border border-green-400/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400/50 transition-all"
          />
        </div>

        {/* Tipo de Projeto */}
        <div>
          <label htmlFor="projectType" className="block text-sm font-semibold text-white mb-2">
            Tipo de Projeto *
          </label>
          <select
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-[#1A1F3A] border border-green-400/30 rounded-lg text-white focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400/50 transition-all appearance-none cursor-pointer"
            required
          >
            <option value="">Selecione um tipo de projeto</option>
            <option value="qa-sob-demanda">QA sob Demanda</option>
            <option value="atuacao-continua">Atuação Contínua por Sprint</option>
            <option value="estruturacao-qa">Estruturação Completa de QA</option>
            <option value="cultura-qualidade">Implantação de Cultura de Qualidade</option>
            <option value="outro">Outro</option>
          </select>
        </div>

        {/* Mensagem */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
            Mensagem Adicional
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Conte-nos mais sobre seu projeto..."
            rows={4}
            className="w-full px-4 py-3 bg-[#1A1F3A] border border-green-400/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400/50 transition-all resize-none"
          />
        </div>

        {/* Botão Submit */}
        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-green-400 hover:bg-green-500 text-black font-semibold py-3 text-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-400/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Enviando...
            </>
          ) : (
            <>
              <Mail className="w-5 h-5" />
              Solicitar Orçamento
            </>
          )}
        </Button>

        <p className="text-sm text-gray-400 text-center">
          * Campos obrigatórios
        </p>
      </form>
    </div>
  );
}
