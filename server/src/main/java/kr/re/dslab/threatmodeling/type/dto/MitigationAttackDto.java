package kr.re.dslab.threatmodeling.type.dto;

import lombok.Data;

import java.util.List;

@Data
public class MitigationAttackDto {

    private String mitigationId;

    private String mitigationName;

    private String mitigationType;

    private String mitigationUrl;

    private List<MitigationAttackAttackDto> relatedAttackTechniques;

}
