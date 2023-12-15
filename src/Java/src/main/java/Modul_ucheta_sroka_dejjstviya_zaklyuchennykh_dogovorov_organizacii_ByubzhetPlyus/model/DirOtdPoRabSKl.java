package Modul_ucheta_sroka_dejjstviya_zaklyuchennykh_dogovorov_organizacii_ByubzhetPlyus.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Modul_ucheta_sroka_dejjstviya_zaklyuchennykh_dogovorov_organizacii_ByubzhetPlyus.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: ДирОтдПоРабСКл
 */
@Entity(name = "IISModul_ucheta_sroka_dejjstviya_zaklyuchennykh_dogovorov_organizacii_ByubzhetPlyusДирОтдПоРабСКл")
@Table(schema = "public", name = "ДирОтдПоРабСКл")
public class DirOtdPoRabSKl {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "idДиректора")
    private Integer idдиректора;

    @Column(name = "Фамилия")
    private String фамилия;

    @Column(name = "Имя")
    private String имя;

    @Column(name = "Отчество")
    private String отчество;

    @Column(name = "НомерТелефона")
    private String номертелефона;

    @Column(name = "НомерПаспорта")
    private String номерпаспорта;

    @Column(name = "СерияПаспорта")
    private String серияпаспорта;


    public DirOtdPoRabSKl() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getidДиректора() {
      return idдиректора;
    }

    public void setidДиректора(Integer idдиректора) {
      this.idдиректора = idдиректора;
    }

    public String getФамилия() {
      return фамилия;
    }

    public void setФамилия(String фамилия) {
      this.фамилия = фамилия;
    }

    public String getИмя() {
      return имя;
    }

    public void setИмя(String имя) {
      this.имя = имя;
    }

    public String getОтчество() {
      return отчество;
    }

    public void setОтчество(String отчество) {
      this.отчество = отчество;
    }

    public String getНомерТелефона() {
      return номертелефона;
    }

    public void setНомерТелефона(String номертелефона) {
      this.номертелефона = номертелефона;
    }

    public String getНомерПаспорта() {
      return номерпаспорта;
    }

    public void setНомерПаспорта(String номерпаспорта) {
      this.номерпаспорта = номерпаспорта;
    }

    public String getСерияПаспорта() {
      return серияпаспорта;
    }

    public void setСерияПаспорта(String серияпаспорта) {
      this.серияпаспорта = серияпаспорта;
    }


}